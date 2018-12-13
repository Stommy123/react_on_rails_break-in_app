import React from 'react';
import {Button} from 'semantic-ui-react'
import { Fa } from 'mdbreact';
import Divider from '@material-ui/core/Divider';



const Popup = ({ place }) => {
  const upVotes = 17
  (
    <div className="map-popup">
      <p><strong>{place.name}</strong></p>
      <p><strong>Category: </strong>{place.category}</p>
      <Divider />
      <p><strong>Description: </strong>{place.description}</p>
      <Divider />
      <p><strong>Address: </strong>{place.street}, {place.city}, {place.state}</p>
      <Divider/>
      <p id='demo'><strong>Validations: </strong>{upVotes}</p>
        <Button
          id={`place_${place.id}`}
          color="green"
          >
            <Fa icon="thumbs-up" />
        </Button>
    </div>
  )
}

export default Popup
