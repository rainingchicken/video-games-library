import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { Prop } from "./Description";

const PlayerStatus = ({ game }: Prop) => {
  return (
    <div className="overflow-x-auto">
      <h1 className="text-5xl text-center font-bold m-5">Player Status</h1>
      <div className="max-w-screen-lg m-auto">
        <Table className="text-center">
          <TableHead>
            <TableHeadCell>
              <div>Wishlisted</div>
              <div>{game.added_by_status.yet}</div>
            </TableHeadCell>
            <TableHeadCell>
              Owned <div>{game.added_by_status.owned}</div>
            </TableHeadCell>
            <TableHeadCell>
              Beaten <div>{game.added_by_status.beaten}</div>
            </TableHeadCell>
            <TableHeadCell>
              <div>Will play</div> <div>{game.added_by_status.toplay}</div>
            </TableHeadCell>
            <TableHeadCell>
              <div>Dropped</div> <div>{game.added_by_status.dropped}</div>
            </TableHeadCell>
            <TableHeadCell>
              <div>Playing</div> <div>{game.added_by_status.playing}</div>
            </TableHeadCell>
          </TableHead>
        </Table>
      </div>
    </div>
  );
};

export default PlayerStatus;
