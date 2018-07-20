class ReportController < ApplicationController
    def index
      respond_to do |format|
        format.html
        format.json do
          @reports = Report.all
          render json: @reports
        end
      end
    end
  end
