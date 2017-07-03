import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';


class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
}

  // {this.props.courses.map(this.courseRow)}
  //courseRow(course, index) {
  //  return <div key={index}>{course.title}</div>;
  //}
  //onClickSave() {
    //this.props.dispatch(courseActions.createCourse(this.state.course)); // option 1
    //this.props.createCourse(this.state.course); // option 2
    //this.props.actions.createCourse(this.state.course);
  //}

  redirectToAddCoursePage() {
    this.context.router.history.push('/course');
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  //createCourse: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
};

CoursesPage.contextTypes = {
  router: PropTypes.object
};

// ownProps let us access props that are being attached to this component, it's a reference to the component's own props. Now in this case, it'll be most useful for accessing routing related props injected by React Router
// We would expect that when the course data changes after reducer that this mapStateToProps function would receive that new state and end up passing that state as this.props.courses to our component, then component render function gets called.
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course)) // option 2; with arrow function (course) can be course if single parameter
    // createCourse: course => bindActionCreators(courseActions.createCourse, dispatch)
    actions: bindActionCreators(courseActions, dispatch)
  };
}

// if omit mapDispatchToProps, our component automatically gets a dispatch property attached to it - this.props.dispatch. And that's injected by Connect.
// export default connect(mapStateToProps)(CoursePage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
