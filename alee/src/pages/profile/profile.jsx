import React, { Component } from "react";
import { Button, Step, Grid, Divider, Header } from "semantic-ui-react";
import {Link} from "../../shared/functional/global-import";
import ProfileStepOne from "./profile-step-one";
import ProfileStepTwo from "./profile-step-two";
import ProfileStepThree from "./profile-step-three";
import ProfileStepFour from "./profile-step-four";




class MyProfile extends Component {
  constructor() {
    super();
    this.state = {
      activeStep: 0,
    };
  }
  changeStep = (stepNumber) => {
    this.setState({ activeStep: stepNumber });
  };

  getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <>
		  	<ProfileStepOne/>
			  <Divider hidden/>
            <Grid>
              <Grid.Column width={16} textAlign="right">
			  	      <Button className="alternateBtn" onClick={() => this.onNext(1)}>
                  Save as draft
                </Button>
                <Button className="primaryBtn" onClick={() => this.onNext(1)}>
				         Continue
                </Button>
              </Grid.Column>
            </Grid>
          </>
        );
      case 1:
        return (
          <>
          	<ProfileStepThree/>

			  <Divider hidden/>
            <Grid>
              <Grid.Column width={16} textAlign="right">
                <Button className="secondaryBtn" onClick={() => this.onPrevious(0)}>
                  Back
                </Button>
				<Button className="alternateBtn" onClick={() => this.onNext(2)}>
                  Save as draft
                </Button>
                <Button className="primaryBtn" onClick={() => this.onNext(2)}>
				Continue
                </Button>
              </Grid.Column>
            </Grid>
          </>
        );
      case 2:
        return (
          <>
		  		  	<ProfileStepTwo/>
			  <Divider hidden/>
            <Grid>
              <Grid.Column width={16} textAlign="right">
                <Button className="secondaryBtn" onClick={() => this.onPrevious(1)}>
                  Back
                </Button>
				<Button className="alternateBtn" onClick={() => this.onNext(3)}>
                  Save as draft
                </Button>
                <Button className="primaryBtn" onClick={() => this.onNext(3)}>
                  Continue
                </Button>
              </Grid.Column>
            </Grid>
          </>
        );
      case 3:
        return (
          <>
		  	<ProfileStepFour/>
			  <Divider hidden/>
            <Grid>
              <Grid.Column width={16} textAlign="right">
                <Button className="secondaryBtn" onClick={() => this.onPrevious(2)}>
                  Back
                </Button>
				        <Button className="alternateBtn">
                  Preview
                </Button>
                <Button className="primaryBtn" as={Link} to="search">
                  Save & Continue
                </Button>
              </Grid.Column>
            </Grid>
          </>
        );
      default:
        return null;
    }
  };
  onNext = (step) => {
    this.setState({ activeStep: step });
  };

  onPrevious = (step) => {
    this.setState({ activeStep: step });
  };
  render() {
    const { activeStep } = this.state;
    return (
		<>
		<Grid>
			<Grid.Column width={16}>
				<Header as="h3" className="commonHeading">Profile Setup</Header>
			</Grid.Column>
			<Grid.Column width={16}>
				<Step.Group
				stackable="tablet"
				className="profileStepper"
				>
				<Step
					active={activeStep === 0 ? true : false}
					completed={activeStep > 0 ? true : false}
					onClick={() => this.changeStep(0)}
				>
					<Step.Content>
					<Step.Description>1</Step.Description>
					<Step.Title>
						<span>Education<br/> Qualification </span>
					</Step.Title>
					
					</Step.Content>
				</Step>
				<Step
					active={activeStep === 1 ? true : false}
					completed={activeStep > 1 ? true : false}
					onClick={() => this.changeStep(1)}
				>
					<Step.Content>
					<Step.Description>2</Step.Description>
					<Step.Title>
					
          <span>Work/Employment <br/> History </span>
					</Step.Title>
					
					</Step.Content>
				</Step>
				<Step
					active={activeStep === 2 ? true : false}
					completed={activeStep > 2}
					onClick={() => this.changeStep(2)}
				>
					<Step.Content>
					<Step.Description>3</Step.Description>
					<Step.Title>
					<span>Key <br/>Skillset </span>
					</Step.Title>
					
					</Step.Content>
				</Step>
				<Step
					active={activeStep === 3 ? true : false}
					completed={activeStep > 3}
					onClick={() => this.changeStep(3)}
				>
					<Step.Content>
					<Step.Description>4</Step.Description>
					<Step.Title>
					<span>Lesson Plan<br/> Format </span>
					</Step.Title>
					
					</Step.Content>
				</Step>
				</Step.Group>
			</Grid.Column>
		</Grid>
            
			  <div>{this.getStepContent(activeStep)}</div>
        </>
    );
  }
}

export default MyProfile;