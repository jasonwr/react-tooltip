import React, {Component} from "react";
import styled from '@emotion/styled'
import {Table} from "../Table";
import data from "./story_test_data.js";
import {ColumnConfiguration} from "../../../utils/column-configuration";

let Row = styled.div`
  display: flex;
  border-bottom: 1px solid black;
`;

let Cell = styled.div`
    padding: 4px 8px;
`;

let Header = styled.div`
  display: flex;
  border-bottom: 1px solid black;
`;

let Filter = styled.div`
  display: flex;
  & * {
    margin-left: 10px;
    margin-top: 10px;
  }
`;

let Container = styled.div`
  padding: 0 50px 50px 50px;
`;

const TableWrapper = styled.div`
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-radius: 5px;
`;

/***
 * Only used in the storybook
 */
class FirstStoryPage extends Component {

  state = {
    data: data,
    filterText: "",
    filterKey: ""
  };

  /**
   * Expand a row callback
   *
   * @param id
   */
  expand = id => {
    let results = this.state.data.map(d => {
      if (d.id === id) d.expand = !d.expand;
      return d;
    });

    this.setState({
      data: results
    });
  };

  render() {
    let {data} = this.state;

    const tableConfiguration = [
      {
        key: "section",
        header: "Section",
        justifyContent: "flex-start",
        sortType: "string"
      },
      {
        key: "verse",
        header: "Verse",
        sortType: "number"
      },

      {
        key: "date",
        header: "Date",
        sortType: "date"
      },
      {
        key: "text",
        header: "Text",
        sortType: "string"
      }
    ];

    const columns = new ColumnConfiguration({
      desktop: tableConfiguration,
      tablet: tableConfiguration,
      mobile: tableConfiguration
    });

    return (
      <Container>
        <div>
          <h4>Doctrine and Covenants Sections 1 through 21</h4>
        </div>
        <div>
          <p>
            The Table component is a bare bones component that simply provides
            table based API for sorting, filtering, searching, etc. The
            developer is responsible for supplying a list of data items which is
            nothing more than an array of objects. Each object element
            represents a row and every tuple (key-value pair) in the object
            represents a single cell. The table simply renders the rows and
            maintains the data set (sorted, filtered, etc.).
          </p>
        </div>
        <Table data={data} columnConfiguration={columns} showExpandAll={false} sortEnabled/>
      </Container>
    );
  }
}

export default FirstStoryPage;
