import { useNotices } from "../Hooks/useNotice";
import Notice from "./Notice";

export default function NoticeList() {
  const { notices, loading, error } = useNotices();

  if (loading) return <p>Carregando notices...</p>;
  if (error) return <p className="text-red-500">Erro: {error}</p>;

  return (
    <div className="flex flex-col gap-3 px-3">
      {notices.slice(0, 3).map((_item, index) => (
        <Notice
          key={index}
          id={_item.id}
          imageUrl={_item.imageUrl}
          category={_item.category}
          title={_item.title}
          authorImageUrl={_item.authorImageUrl}
          authorName={_item.authorName}
          date={_item.date}
        />
      ))}
    </div>
  );
}
