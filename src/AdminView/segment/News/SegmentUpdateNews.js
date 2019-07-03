import React from 'react'
import { Button, Image, Item, Segment } from 'semantic-ui-react'

const paragraph = <p>Description</p>
const styleDeleteButton = { 'marginRight': '4em', 'marginLeft': '2em' };

const SegmentUpdateNews = () => (
    <Segment>
        <Item.Group relaxed>
            <Item>
                <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />

                <Item.Content verticalAlign='middle'>
                    <Item.Header>Title A</Item.Header>
                    <Item.Description>{paragraph}</Item.Description>
                    <Item.Extra>
                        <Button style={styleDeleteButton} floated='right'>Delete</Button>
                        <Button floated='right'>Edit</Button>
                    </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />

                <Item.Content verticalAlign='middle'>
                    <Item.Header>Title B</Item.Header>
                    <Item.Description>{paragraph}</Item.Description>
                    <Item.Extra>
                        <Button style={styleDeleteButton} floated='right'>Delete</Button>
                        <Button floated='right'>Edit</Button>
                    </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />

                <Item.Content verticalAlign='middle'>
                    <Item.Header>Title C</Item.Header>
                    <Item.Description>{paragraph}</Item.Description>
                    <Item.Extra>
                        <Button style={styleDeleteButton} floated='right'>Delete</Button>
                        <Button floated='right'>Edit</Button>
                    </Item.Extra>
                </Item.Content>
            </Item>
            <Item>
                <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />

                <Item.Content verticalAlign='middle'>
                    <Item.Header>Title C</Item.Header>
                    <Item.Description>{paragraph}</Item.Description>
                    <Item.Extra >
                        <Button style={styleDeleteButton} floated='right'>Delete</Button>
                        <Button floated='right'>Edit</Button>   
                    </Item.Extra>
                </Item.Content>
            </Item>

        </Item.Group>
    </Segment>
)

export default SegmentUpdateNews