import React from "react";
import { connect } from "react-redux";

export const Task = (props) => {
  return <div>Task</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
