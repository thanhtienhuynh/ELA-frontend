import React from 'react';
import {Divider, Grid, Button} from 'semantic-ui-react';
import LectureDetail from './LectureDetail/LectureDetail'
import DimmerImg from './DimmerLectureImage/DimmerLectureImage';
const styleCourse = {'marginTop': '1em', 'marginLeft' : '1em', 'marginRight': '1em'}
const Lecture = () => {
    return (
        <div style={styleCourse}>
            <Divider
                as='h1'
                className='header'
                horizontal
                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
                <a href="#">Lectures</a>
            </Divider>
            <Grid columns="equal" divided>
                <Grid.Row>
                    <Grid.Column >
                        <LectureDetail name="Julietto Markow" country="USA" des="Description 1">
                            <DimmerImg />
                        </LectureDetail>
                    </Grid.Column>
                    <Grid.Column>
                        <LectureDetail name="Tran The Tin" country="Viet Nam" des="Description 2">
                            <DimmerImg />
                        </LectureDetail>
                    </Grid.Column>
                    <Grid.Column>
                        <LectureDetail name="Karren Legen" country="Philipine" des="Description 3">
                            <DimmerImg />
                        </LectureDetail>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid >
                <Grid.Column textAlign="center">
                    <Button size="big" color="green" style={{'marginTop':'1em'}}>See More</Button>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Lecture;