import "@/App.css";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import usePosts from "./hooks/use-posts";
import type { Post } from "./services/api/user-api";

function App() {
  const queryField: Array<keyof Post> = [
    "id",
    "title",
    "content",
    "viewCount",
    "published",
  ];
  const {
    data: posts,
    isLoading,
    error,
  } = usePosts(queryField, { staleTime: 5000, enabled: true });
  const toggleAdd = () => {
    console.log("add");
  };

  const toggleDelete = () => {
    console.log("delete");
  };

  const toggleUpdate = () => {
    console.log("update");
  };

  // useEffect(() => {
  //   console.log(solution(3, 5));
  // }, []);

  const solution = (A: number, B: number) => {
    for (let length = Math.min(A, B); length > 0; length--) {
      if (canSquare(length, A, B)) {
        return length;
      }
    }
    return 0;
  };

  const canSquare = (length: number, stick1: number, stick2: number) => {
    return countPieces(length, stick1, stick2) >= 4;
  };

  const countPieces = (length: number, stick1: number, stick2: number) => {
    return Math.floor(stick1 / length) + Math.floor(stick2 / length);
  };

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error loading profile :{error.message}</div>;

  return (
    <div>
      <h1>Profile</h1>
      <div className="flex flex-row justify-center gap-2 my-2">
        <Button
          variant="outline"
          onClick={() => {
            let a = solution(0, 5);
            console.log("a", a);
          }}
        >
          Add
        </Button>
        <Button variant="outline" onClick={toggleDelete}>
          Delete
        </Button>
        <Button variant="outline" onClick={toggleUpdate}>
          Update
        </Button>
      </div>

      <Table>
        <TableCaption>A list of your posts</TableCaption>
        <TableHeader>
          <TableRow>
            {queryField.map((field) => (
              <TableHead key={field} className="text-center">
                {field.toUpperCase()}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts &&
            posts.map((post: Post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium text-left">
                  {post.id}
                </TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.content}</TableCell>
                <TableCell className="text-right">{post.viewCount}</TableCell>
                <TableCell className="text-center">
                  {post.published ? "True" : "False"}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>

        {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
      </Table>
    </div>
  );
}

export default App;
