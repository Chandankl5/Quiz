import { NextResponse } from "next/server";

const data = {
  quizzes: {
    allIds: ['1'],
    byIds: {
      '1': {
        id: '1',
        name: 'Quiz',
        questions: {
          allIds: ['1q1', '1q2', '1q3', '1q4', '1q5'],
          byIds: {
            '1q1': {
              id: '1q1',
              label: 'How do you judge what should be added in the next version of the app?',
              supportImgSrc: '',
              options: [
                {
                  id: '1q1o1',
                  label: 'Data Analysis'
                },
                {
                  id: '1q1o2',
                  label: 'Users feedback'
                },
                {
                  id: '1q1o3',
                  label: 'Copy from similar product'
                },
                {
                  id: '1q1o4',
                  label: 'Make a questionary'
                }
              ]
            },
            '1q2': {
              id: '1q2',
              label: 'Which heavyweight boxer proclaimed "I am the greatest" after his win over Sonny Liston?',
              options: [
                {
                  id: "1q2o1",
                  label: 'Evander Holyfield'
                },
                {
                  id: "1q2o2",
                  label: 'George Foreman'
                },
                {
                  id: "1q2o3",
                  label: 'James J'
                },
                {
                  id: "1q2o4",
                  label: 'Steve Smith'
                }
              ]
            },
            '1q3': {
              id: '1q3',
              label: 'The number 42 is retired from all of Major League Baseball in honor of what player?',
              options: [
                {
                  id: '1q3o1',
                  label: 'Jackie Robinson'
                },
                {
                  id: '1q3o2',
                  label: 'Lou Gehrig'
                },
                {
                  id: '1q3o3',
                  label: 'Mickey Mantle'
                },
                {
                  id: '1q3o4',
                  label: 'Babe Ruth'
                },
                {
                  id: '1q3o5',
                  label: 'Joe Atlan'
                },
              ]
            },
            '1q4': {
              id: '1q4',
              label: 'Which athlete is the most-decorated Olympian of all time, with a total haul of 28 medals, including 23 golds, of which a record 8 golds were won in a single Games?',
              options: [
                {
                  id: "1q4o1",
                  label: 'Michael Phelps'
                },
                {
                  id: "1q4o2",
                  label: 'Simone Biles'
                },
                {
                  id: "1q4o3",
                  label: 'Mark Spitz'
                },
                {
                  id: "1q4o4",
                  label: 'Carl Lewis'
                },
              ]
            }
          }
        }
      }
    }
  },
}

export async function POST(request, context) {

  const { choices = [] } = request.json();
  const { params: { quizId, questionId } } = context;

  if (!data.quizzes.allIds.includes(quizId) || !data.quizzes.byIds[quizId].questions.allIds.includes(questionId)) {
    return NextResponse.json({ message: 'Invalid Quiz ID /Question ID' }, { status: '404' })
  }

  try {

    return NextResponse.json({ status: 'Success' }, { status: 200})
  }
  catch(error) {
    return NextResponse.json({message: error.message}, {status: 500})
  }
}