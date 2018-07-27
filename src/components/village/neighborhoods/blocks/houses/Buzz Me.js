import React from 'react'
import { Button, Collapse, Well, Col } from 'react-bootstrap'

export default class BuzzMe extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <span>
        <Col smHidden xsHidden>
        <Button bsStyle="primary" onClick={() => this.setState({ open: !this.state.open })}>
          Buzzme
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              {this.props.phone}
            </Well>
          </div>
        </Collapse>
        </Col>

        <Col lgHidden mdHidden>
        <Button>{this.props.phone}</Button>
        </Col>
      </span>
    );
  }
}