import React from 'react';

import { Card } from 'antd';


export default ({editing, person}) => {
    console.log()
    const toLearn = person.toLearn.map(skill => <a  href="#"> # {skill}</a> );
     return(
      <>   
        <Card style={{margin:10}}>
          <h6>Topics I Want To Learn</h6>
      <p>{toLearn} </p>
      {editing && (<form onSubmit={this.handleOnClick}>
            <input defaultValue={person.toLearn} id="skill" type="text" name="skill" />
            <br/>
            <input type="submit" value="Submit"/> 
           

            </form>)}
        </Card>
     </>  
     )
    }
  