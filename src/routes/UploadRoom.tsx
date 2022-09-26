import useHostOnlyPage from "../components/HostOnlyPage";
import ProtectedPage from "../components/ProtectedPage";

export default function UploadRoom() {
  useHostOnlyPage();
  return (
    <ProtectedPage>
      <h1>upload roommmmmmm</h1>
    </ProtectedPage>
  );
}
