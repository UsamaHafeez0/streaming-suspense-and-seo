async function getComments() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return Array.from({ length: 20 }, (_, index) => "Comment");
}

export default async function Comments() {
  const comments = await getComments();
  return comments.map((comment, index) => {
    return <p className="p-2">Comment {index + 1}</p>;
  });
}
