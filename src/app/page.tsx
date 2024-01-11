import TopicCreateForm from "@/components/topics/createForm";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-4">
      <div className="col-span-3">
        <h1>Top posts</h1>
      </div>
      <div>
        <TopicCreateForm />
      </div>
    </div>
  );
}
