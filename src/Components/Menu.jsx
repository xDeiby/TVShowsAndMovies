import React, { useState } from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';

function MenuSegment(props){
  const [activeItem, setActiveItem] = useState(props.page);

  const handleItemClick = (e, page) => {
    setActiveItem(page.name);
    history.push(`/${page.name}`);
  }

    const {history} = props;

    return (
      <Menu size='large' secondary pointing>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Movies'
          active={activeItem === 'Movies'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Series'
          active={activeItem === 'Series'}
          onClick={handleItemClick}
        />

        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}

export default withRouter(MenuSegment);
