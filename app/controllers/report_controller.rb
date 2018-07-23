class ReportController < ApplicationController
    before_action :authenticate_user!
    def index
      respond_to do |format|
        format.html
        format.json do
          @reports = Report.all
          render json: @reports
        end
      end
    end

    def create
      @report = current_user.reports.new(report_params)
      if @report.save
        render json: @report
      else
        render json: @report.errors.full_messages, status: 400
      end
    end

    def destroy
      @report = current_user.reports.find(params[:id])
      @report.destroy
      render json: @report
    end

    private

    def report_params
      params.require(:report).permit(:description, :category)
    end

end
