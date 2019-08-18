import Button from "@material-ui/core/Button";
import React from "react";
import { useFudge } from "../../hooks/useFudge";
import { Dice } from "./Dice";

export const FudgeDices = props => {
  const fudge1 = useFudge();
  const fudge2 = useFudge();
  const fudge3 = useFudge();
  const fudge4 = useFudge();

  return (
    <div>
      <div className="row center-xs">
        <div className="col-xs-12">
          <Button
            variant="contained"
            color="primary"
            disabled={fudge1.isRolling}
            onClick={async () => {
              fudge1.roll();
              fudge2.roll();
              fudge3.roll();
              fudge4.roll();
            }}
          >
            Roll
          </Button>
        </div>
      </div>

      <div className="row center-xs">
        <div className="col-xs col-md-1">
          <Dice size={1}>{fudge1.value}</Dice>
        </div>
        <div className="col-xs col-md-1">
          <Dice size={1}>{fudge2.value}</Dice>
        </div>
        <div className="col-xs col-md-1">
          <Dice size={1}>{fudge3.value}</Dice>
        </div>
        <div className="col-xs col-md-1">
          <Dice size={1}>{fudge4.value}</Dice>
        </div>
      </div>
    </div>
  );
};