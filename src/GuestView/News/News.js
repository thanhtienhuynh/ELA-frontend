import React from 'react'
import { Grid, Segment, Card, Image, Button, Header, Divider } from 'semantic-ui-react'

const News = () => (
    <div>
        <Divider
            as='h1'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
            <a href="#">News</a>
        </Divider>
        <Grid columns={3} divided>
            <Grid.Row stretched>
                <Grid.Column width={6}>
                    <Card fluid>
                        <Image src='https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg' />
                        <Card.Content>
                            <Card.Header>My Neighbor Totoro</Card.Header>
                            <Card.Description>
                                Two sisters move to the country with their father in order to be
                                closer to their hospitalized mother, and discover the surrounding
                                trees are inhabited by magical spirits.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button positive floated="right">View More</Button>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column width={5}>
                    <Segment>
                        <Grid>
                            <Grid.Row verticalAlign="middle">
                                <Grid.Column width={6}>
                                    <Image size="small" src='https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg' />
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <Header>My Neighbor Totoro</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row >
                                <Grid.Column textAlign="justified">
                                    Two sisters move to the country with their father in order to be
                                    closer to their hospitalized mother, and discover the surrounding
                                    trees are inhabited by magical spirits.
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row >
                                <Grid.Column textAlign="right">
                                    <Button content="view" basic/>                                
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    <Segment>
                        <Grid>
                            <Grid.Row verticalAlign="middle">
                                <Grid.Column width={6}>
                                    <Image size="small" src='https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg' />
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <Header>My Neighbor Totoro</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row >
                                <Grid.Column textAlign="justified">
                                    Two sisters move to the country with their father in order to be
                                    closer to their hospitalized mother, and discover the surrounding
                                    trees are inhabited by magical spirits.
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row >
                                <Grid.Column textAlign="right">
                                    <Button content="view" basic/>                                
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={5}>
                    <Segment>
                        <Grid>
                            <Grid.Row verticalAlign="middle">
                                <Grid.Column width={6}>
                                    <Image size="small" src='https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg' />
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <Header>My Neighbor Totoro</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row >
                                <Grid.Column textAlign="justified">
                                    Two sisters move to the country with their father in order to be
                                    closer to their hospitalized mother, and discover the surrounding
                                    trees are inhabited by magical spirits.
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row >
                                <Grid.Column textAlign="right">
                                    <Button content="view" basic/>                                
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    <Segment>
                        <Grid>
                            <Grid.Row verticalAlign="middle">
                                <Grid.Column width={6}>
                                    <Image size="small" src='https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg' />
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <Header>My Neighbor Totoro</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row >
                                <Grid.Column textAlign="justified">
                                    Two sisters move to the country with their father in order to be
                                    closer to their hospitalized mother, and discover the surrounding
                                    trees are inhabited by magical spirits.
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row >
                                <Grid.Column textAlign="right">
                                    <Button content="view" basic/>                                
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
    
)

export default News