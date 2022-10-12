import Dropdown from 'react-bootstrap/Dropdown';
import "./UserNavbar.css"
function HeaderDropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <div className='avtar'><img src="https://avatars.githubusercontent.com/u/92790017?v=4" alt="" /> </div> 
          
         <h5 className='heading5 '> Profile </h5>

      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default HeaderDropDown;