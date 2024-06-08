export interface CategoryListItemInterface {
  document_id: string;
  parent_id: string;
  name: string;
  is_dir: boolean;
  is_api_doc: boolean;
  doc_type: number;
  keywords: Array<{
    keyword: string;
    font_color: string;
    background_color: string;
  }>;
  update_time: string;
}
