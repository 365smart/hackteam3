import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  max-width: 420px;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
`;

const Group = styled.div`
  display: flex;
  flex-direction: row;
`;

const Name = styled.div`
  color: #22212D;
  font-size: 18px
  text-align: left;
`;

const Place = styled(Name)`
  font-weight: 700;
  width: 56px;
`;

const Points = styled(Name)`
  text-align: right;
`;

class LeaderRow extends React.Component {
  render() {
    const {
      place,
      name,
      points,
    } = this.props;
    return (
      <Row>
        <Group>
          <Place>{place}</Place>
          <Name>{name}</Name>
        </Group>
        <Group>
          <Points>{points}</Points>
        </Group>
      </Row>
    );
  }
}

export default LeaderRow
