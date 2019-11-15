import React, { Component } from 'react';
import { Timeline } from 'antd';
import TimelineItems from './TimelineItems';
import PropTypes from 'prop-types';

class Timeline1 extends Component {
  render() {
    const { details } = this.props;

    // TODO remove reverse and order by context date instead reverse()
    const $details = details.reverse().map(detail => (
      <React.Fragment key={detail.url}>
        <TimelineItems detail={detail} delTodo={this.props.delTodo} />
      </React.Fragment>
    ));
    return (
      <React.Fragment>
        <Timeline>{$details}</Timeline>
      </React.Fragment>
    );
  }
}

//PropTypes
Timeline1.propTypes = {
  details: PropTypes.array.isRequired
};

export default Timeline1;
