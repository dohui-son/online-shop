import { Category } from "../type/category";

export const TOTAL_CATEGORIES: Omit<Category, "onClick">[] = [
  { title: "전체", key: "main" },
  { title: "패션", key: "fashion" },
  { title: "뷰티", key: "beauty" },
  { title: "식품", key: "fresh" },
  { title: "스포츠/레저", key: "leisure" },
  { title: "생활", key: "life" },
  { title: "디지털/가전", key: "digital" },
  { title: "인테리어", key: "interior" },
  { title: "출산/유아동", key: "baby" },
  { title: "여행 e쿠폰", key: "travel" },
];

export const TODAY_CATEGORIES: Omit<Category, "onClick">[] = [
  { title: "전체", key: "main" },
  { title: "식품", key: "fresh" },
  { title: "생활", key: "life" },
  { title: "디지털", key: "digital" },
  { title: "뷰티 패션", key: "beauty_fashion" },
  { title: "여행 e쿠폰", key: "travel" },
];
