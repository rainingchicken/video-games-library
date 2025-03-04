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

const ExtraGameDetailsTable = ({ game }: Prop) => {
  return (
    <div className="overflow-x-auto m-10">
      <Table>
        <TableHead>
          <TableHeadCell>More details</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow>
            <TableCell>{"Alt. names"}</TableCell>
            <TableCell>
              {game.alternative_names &&
                game.alternative_names.map((name) => (
                  <span key={name}>{name} </span>
                ))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell> {"Playtime"}</TableCell>
            <TableCell>{game.playtime} hours</TableCell>
          </TableRow>
          <TableRow>
            <TableCell> {"Released"}</TableCell>
            <TableCell>{game.released ? game.released : game.tba}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell> {"Updated"}</TableCell>
            <TableCell>{game.updated}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell> {"Website"}</TableCell>
            <TableCell>
              <a href={game.website}>{game.website}</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell> {"Reddit"}</TableCell>
            <TableCell>
              <a href={game.reddit_url}>{game.reddit_url}</a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ExtraGameDetailsTable;
