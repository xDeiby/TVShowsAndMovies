import React, { useState, useEffect } from 'react';
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react';
import {getGenres} from '../Services/DataService'

const Genres = ({genre}) => {

  const [activeItem, setActiveItem] = useState("");
  const [generos, setGeneros] = useState([]);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  useEffect( () => {
    getGenres(genre)
    .then( list => setGeneros(list.genres));
  },[]);


  return (
      <Menu vertical>
        <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item>

        <Menu.Item>
             Genres
          <Menu.Menu>
              {generos.map( (genero) => (
                <Menu.Item
                  key = {genero.id}
                  name= {genero.name}
                  active={activeItem ===  genero.name}
                  onClick={handleItemClick}
                >
                  {genero.name}
                </Menu.Item>
              ))}
              
          </Menu.Menu>

        </Menu.Item>

        <Menu.Item
          name='browse'
          active={activeItem === 'browse'}
          onClick={handleItemClick}
        >
          <Icon name='grid layout' />
          Browse
        </Menu.Item>
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={handleItemClick}
        >
          Messages
        </Menu.Item>

        <Dropdown item text='More'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='globe' text='Choose Language' />
            <Dropdown.Item icon='settings' text='Account Settings' />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
}

export default Genres;