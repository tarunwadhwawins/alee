import React, { useState, useEffect } from "react";
import { Button, Step, Grid, Divider, Header } from "semantic-ui-react";
import { Link } from "../../shared/functional/global-import";
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from "../../store/actions/api.actions";
import ProfileStepOne from "./profile-step-one";
import ProfileStepTwo from "./profile-step-two";
import ProfileStepThree from "./profile-step-three";
import ProfileStepFour from "./profile-step-four";

const initialState = { schoolId: null, grades: [], teacherId: null, subjectId: null, actionPerformedBy: "" }
const initialStateStepSecond = { degree: "", college: "", inProgress: false, yearOfPassing: "", index: null }
const initialCurrentSchool = { institute: "", position: "", grades: [], isCurrent: true, index: null }
const initialPreviousSchool = { institute: "", position: "", grades: [], isCurrent: false, index: null }
function MyProfile() {
  const teacherId = useSelector(state => state.auth.userDetail.teacherId)
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState(initialState);
  const [secondstepValues, setsecondstepValues] = useState(initialStateStepSecond);
  const [formSecondStep, setFormSecondStep] = useState([]);
  const [currentSchool, setcurrentSchool] = useState(initialCurrentSchool)
  const [previousSchool, setPreviousSchool] = useState(initialPreviousSchool)
  const [thirdSecondStep, setThirdSecondStep] = useState([]);

  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [skilled, setSkilled] = useState("");
  const [skills, setSkills] = useState([]);

  const changeStep = (stepNumber) => setActiveStep(stepNumber);

  const dispatch = useDispatch();
  useEffect(() => {
    setValues({ ...values, teacherId: teacherId })
  }, [values.teacherId]);

  const onChangeFirststep = (e, { data, value }) => {
    setValues({ ...values, [data]: value });
  }

  const onChangeSecondStep = (e, { data, value, checked, type }) => {
    const qualificationValue = type === "checkbox" ? checked : value;
    setsecondstepValues({ ...secondstepValues, [data]: qualificationValue })
  }

  const onChangePreviousSchool = (e, { data, value }) => {
    setPreviousSchool({ ...previousSchool, [data]: value })
  }
  const onHandleCurrentSchool = (e, { data, value }) => {
    setcurrentSchool({ ...currentSchool, [data]: value })
  }
  const onChangeFourstep = (e, { value }) => {
    setSkilled(value);
  }
  const onStepFirst = () => {
    dispatch(apiCall({
      urls: ["ADDTEACHERBASICINFO"], method: "POST", data: values, onSuccess: (response) => {
        changeStep(1);
      }, showNotification: true
    }))
  }
  /////////////-Second Step-/////////////
  const addMoreQualification = () => {
    setFormSecondStep(formSecondStep.concat({ degree: secondstepValues.degree, college: secondstepValues.college, inProgress: secondstepValues.inProgress, yearOfPassing: secondstepValues.yearOfPassing }))
    setsecondstepValues(initialStateStepSecond)
  }
  const removeQualification = (index) => {
    const rows = [...formSecondStep]
    rows.splice(index, 1);
    setFormSecondStep(rows);
  }
  const editQualification = (data, index) => {
    setsecondstepValues({ ...secondstepValues, degree: data.degree, college: data.college, inProgress: data.inProgress, yearOfPassing: data.yearOfPassing, index: index })
  }
  const updateQualification = () => {
    const items = [...formSecondStep];
    items[secondstepValues.index] = { "degree": secondstepValues.degree, "college": secondstepValues.college, "inProgress": secondstepValues.inProgress, "yearOfPassing": secondstepValues.yearOfPassing }
    setFormSecondStep(items)
    setsecondstepValues(initialStateStepSecond)
  }
  const onStepSecond = () => {
    dispatch(apiCall({
      urls: ["ADDTEACHERQUALIFICATION"], method: "POST", data: ({ teacherQualificationData: formSecondStep, teacherEducationDetailId: null, teacherId: teacherId, actionPerformedBy: "" }), onSuccess: (response) => {
        changeStep(2);
      }, showNotification: true
    }))
  }
  /////////// -THREE STEP- /////////
  const onThreeStepEducation = () => {
    dispatch(apiCall({
      urls: ["ADDTEACHERWORKEXPERIENCE"], method: "POST", data: ({
        teacherWorkExperienceData: thirdSecondStep,
        teacherWorkExperienceId: null, teacherId: teacherId, actionPerformedBy: ""
      }),
      onSuccess: (response) => {


        changeStep(3);
      }, showNotification: true
    }))
  }
  const addEducation = () => {
    setThirdSecondStep(thirdSecondStep.concat({
      preInstitute: previousSchool.institute,
      curInstitute: currentSchool.institute, curPosition: currentSchool.position, prePosition: previousSchool.position,
      preGrades: previousSchool.grades, PreIsCurrent: previousSchool.isCurrent, curGrades: currentSchool.grades,
      curIsCurrent: currentSchool.isCurrent
    }));
    setPreviousSchool(initialPreviousSchool);
    setcurrentSchool(initialCurrentSchool);
  }
  const removeEducation = (index) => {
    const rows = [...thirdSecondStep]
    rows.splice(index, 1);
    setThirdSecondStep(rows)
  }
  const editEducation = (data, index) => {

    setPreviousSchool({ ...previousSchool, institute: data.preInstitute, position: data.prePosition, grades: data.preGrades, index: index });
    setcurrentSchool({ ...currentSchool, institute: data.curInstitute, position: data.curPosition, grades: data.curGrades, index: index });
  }
  const updateEducation = () => {
    ;
    const items = [...thirdSecondStep];
    items[previousSchool.index, currentSchool.index] = {
      "preInstitute": previousSchool.institute, "prePosition": previousSchool.position, "preGrades": previousSchool.grades,
      "preIsCurrent": previousSchool.isCurrent, "curInstitute": currentSchool.institute,
      "curPosition": currentSchool.position, "curGrades": currentSchool.grades, "curIsCurrent": currentSchool.isCurrent
    }
    setThirdSecondStep(items)
    setPreviousSchool(initialPreviousSchool);
    setcurrentSchool(initialCurrentSchool);
  }
  //////////-FOURSTEP -////////////
  const onFourStepSkill = () => {
    dispatch(apiCall({
      urls: ["ADDTEACHERSKILLS"], method: "POST", data: ({ skills: skills, teacherId: teacherId, actionPerformedBy: "" }),
      onSuccess: (response) => {

      }, showNotification: true
    }))
  }
  const addMoreSkill = () => {
    setSkills(skills.concat(skilled));
    setSkilled("");
  }
  const editSkills = (data, index) => {
    setSkilled(data);
    setSelectedIndex(index);
  }
  const updateSkill = () => {
    const items = [...skills];
    items[skilled] = { skilled }
    setSkills(items);
    setSkilled("");
  }
  const removeSkill = (index) => {
    const rows = [...skills]
    rows.splice(index, 1);
    setSkills(rows);
  }
  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <>
            <ProfileStepOne onHandleChange={onChangeFirststep} />
            <Divider hidden />
            <Grid>
              <Grid.Column width={16} textAlign="right">
                <Button className="alternateBtn" onClick={() => changeStep(1)}>
                  Save as draft
                </Button>
                <Button className="primaryBtn" onClick={onStepFirst}>
                  Continue
                </Button>
              </Grid.Column>
            </Grid>
          </>
        );
      case 1:
        return (
          <>
            <ProfileStepTwo onHandleChange={onChangeSecondStep}
              addMoreQualification={addMoreQualification} formSecondStep={formSecondStep}
              removeQualification={removeQualification} secondstepValues={secondstepValues}
              editQualification={editQualification} updateQualification={updateQualification} />

            <Divider hidden />
            <Grid>
              <Grid.Column width={16} textAlign="right">
                <Button className="secondaryBtn" onClick={() => changeStep(0)}>
                  Back
                </Button>
                <Button className="alternateBtn" onClick={() => changeStep(2)}>
                  Save as draft
                </Button>
                <Button className="primaryBtn" onClick={onStepSecond}>
                  Continue
                </Button>
              </Grid.Column>
            </Grid>
          </>
        );
      case 2:
        return (
          <>
            <ProfileStepThree onHandleChange={onChangePreviousSchool} addEducation={addEducation}
              thirdSecondStep={thirdSecondStep}
              removeEducation={removeEducation}
              onHandleCurrentSchool={onHandleCurrentSchool}
              currentSchool={currentSchool} previousSchool={previousSchool}
              editEducation={editEducation} updateEducation={updateEducation}
            />
            <Divider hidden />
            <Grid>
              <Grid.Column width={16} textAlign="right">
                <Button className="secondaryBtn" onClick={() => changeStep(1)}>
                  Back
                </Button>
                <Button className="alternateBtn" onClick={() => changeStep(3)}>
                  Save as draft
                </Button>
                <Button className="primaryBtn" onClick={onThreeStepEducation}>
                  Continue
                </Button>
              </Grid.Column>
            </Grid>
          </>
        );
      case 3:
        return (
          <>
            <ProfileStepFour onHandleChange={onChangeFourstep} skills={skills} addMoreSkill={addMoreSkill}
              editSkills={editSkills} removeSkill={removeSkill} skilled={skilled} updateSkill={updateSkill}

            />
            <Divider hidden />
            <Grid>
              <Grid.Column width={16} textAlign="right">
                <Button className="secondaryBtn" onClick={() => changeStep(2)}>
                  Back
                </Button>
                <Button className="alternateBtn">
                  Preview
                </Button>
                <Button className="primaryBtn" as={Link} to="lesson-library" onClick={onFourStepSkill}>
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
              onClick={() => changeStep(0)}
            >
              <Step.Content>
                <Step.Description>1</Step.Description>
                <Step.Title>
                  <span>Basic Info</span>
                </Step.Title>

              </Step.Content>
            </Step>
            <Step
              active={activeStep === 1 ? true : false}
              completed={activeStep > 1 ? true : false}
              onClick={() => changeStep(1)}
            >
              <Step.Content>
                <Step.Description>2</Step.Description>
                <Step.Title>
                  <span>Education<br /> Qualification </span>
                </Step.Title>
              </Step.Content>
            </Step>
            <Step
              active={activeStep === 2 ? true : false}
              completed={activeStep > 2}
              onClick={() => changeStep(2)}
            >
              <Step.Content>
                <Step.Description>3</Step.Description>
                <Step.Title>
                  <span>Work/Employment <br /> History </span>
                </Step.Title>

              </Step.Content>
            </Step>
            <Step
              active={activeStep === 3 ? true : false}
              completed={activeStep > 3}
              onClick={() => changeStep(3)}
            >
              <Step.Content>
                <Step.Description>4</Step.Description>
                <Step.Title>
                  <span>Key <br />Skillset </span>
                </Step.Title>

              </Step.Content>
            </Step>
          </Step.Group>
        </Grid.Column>
      </Grid>
      <div>{getStepContent(activeStep)}</div>
    </>
  );
}

export default MyProfile;