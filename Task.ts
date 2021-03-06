// Export to use it in other files.
export interface Task {
  id?: number;  // optional
  text: string;
  day: string;
  reminder: boolean;
}