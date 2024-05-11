export const QUERY_ALL_COURSES = `
{
    courses{
      uri
      has_name {
        Entity_name
      }
      Course_index
      Course_credits
      Degree_program
      Abstract
      Description
      has_department {
        name {
          Entity_name
        }
      }
      course_term {
        label
      }
      series_of {
        Course_interval
        Course_type
        Course_frequency
        Day_of_week
        Schedule_start
        Schedule_end
        has_start {
          label
          Start
          End
        }
        has_professor {
          name {
            Entity_name
          }
          uri
        }
        has_location {
          Description
          Room_type
          Seats
          part_of {
            label
          }
        }
      }
    }
  }
`;
