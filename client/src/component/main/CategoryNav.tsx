import { Category } from "@/lib/type/category";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  items: Category[];
  curItem: string;
}

export function Nav({ items, curItem = "main" }: Props) {
  const router = useRouter();
  return (
    <MainWrapper>
      <Ul>
        {items?.map(({ key, title }) => (
          <Link
            href={{
              query: { ...router.query, category: key },
            }}
            key={key + title + "Nav"}
          >
            <Li
              role="nav"
              style={{
                backgroundColor:
                  curItem === key ? "var(--color-blue)" : "transparent",
                color: curItem === key ? "#fff" : "#333",
              }}
            >
              {title}
            </Li>
          </Link>
        ))}
      </Ul>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 30px;
  padding: 0;
  border: 1px solid #e7e8eb;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
`;

const Li = styled.li`
  width: 128px;
  height: 49px;
  position: relative;
  padding: 0;
  border: 0 none;
  border-radius: 0;
  font-weight: 700;
  font-size: 15px;
  line-height: 49px;
  text-align: center;
  cursor: pointer;
`;
