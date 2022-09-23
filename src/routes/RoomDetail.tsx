import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom } from "../api";

export default function RoomDetail() {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery([`room:${roomPk}`], getRoom);
  console.log(data);
  return <h1>hello</h1>;
}
