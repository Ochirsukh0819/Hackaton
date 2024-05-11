export interface InputType {
  labelName?: string;
  type: string;
  inputState: any;
  inputSetState: React.Dispatch<React.SetStateAction<any>>;
  isImage?: boolean;
  command?: boolean;
}

export interface ButtonType {
  buttonType?: "submit" | "reset" | "button" | undefined;
  buttonName: string;
  loading?: boolean;
}

export interface User {
  uid: string;
  email: string;
  token: string;
  userType?: string;
  studentId: string;
  userName?: string;
  tokenExpiration: 0;
}

export interface RegisterInput {
  userName: string;
  email: string;
  password: string;
  studentId: string;
}
export interface LoginInput {
  email: string;
  password: string;
}

export interface Course {
  uri: string;
  has_name: {
    Entity_name: string;
  }[];
  Course_index: string | null;
  Course_credits: number | null;
  Degree_program: string | null;
  Abstract: string;
  Description: string;
  has_department: {
    name: {
      Entity_name: string | null;
    }[];
  }[];
  course_term: {
    label: string | null;
  }[];
  series_of: {
    Course_interval: string | null;
    Course_type: string | null;
    Course_frequency: number | null;
    Day_of_week: string | null;
    Schedule_start: string | null;
    Schedule_end: string | null;
    has_start: {
      label: string | null;
      Start: string | null;
      End: string | null;
    }[];
    has_professor: {
      name: {
        Entity_name: string | null;
      };
      uri: string | null;
    }[];
    has_location: {
      Description: string | null;
      Room_type: string | null;
      Seats: number | null;
      part_of: {
        label: string | null;
      }[];
    }[];
  }[];
  instructors: {
    name: {
      Entity_name: string | null;
    }[];
    uri: string | null;
  }[];
  component: string[];
}

export interface DocumentType {
  id?: string;
  file?: File;
  fileUrl?: string;
  studentName?: string;
  studentId?: string;
  rate?: string;
}

export interface CardType {
  id?: string;
  file?: File;
  fileUrl?: string;
  studentName?: string;
  studentId?: string;
  rate?: string;
}
