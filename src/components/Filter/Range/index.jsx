import React from "react";
import { Range } from "react-range";
import styles from "./range.module.css";

class RangeInput extends React.Component {
  state = { values: [4] };

  render() {
    console.log(this.state.values);
    return (
      <div className={styles.root}>
        <div className={styles.text}>
          <span>- - by rating:</span>
          <span>{this.state.values}</span>
        </div>
        <Range
          step={0.1}
          min={0}
          max={10}
          values={this.state.values}
          onChange={(values) => this.setState({ values })}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "4px",
                width: "100%",
                backgroundColor: "#cecece4b",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              className={styles.th}
              {...props}
              style={{
                ...props.style,
                height: "26px",
                width: "26px",
                borderRadius: "50%",
                outline: "none",
                backgroundColor: "rgb(21, 129, 18)",
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default RangeInput;
