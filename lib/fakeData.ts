import { BookOpen, Calculator, Atom, Globe, GraduationCap } from "lucide-react"

const subjects = [
    { id: 'math', name: 'Mathematics', icon: Calculator, color: 'text-blue-500', progress: 30, totalLessons: 10 },
    { id: 'science', name: 'Science', icon: Atom, color: 'text-green-500', progress: 40, totalLessons: 12 },
    { id: 'literature', name: 'Literature', icon: BookOpen, color: 'text-yellow-500', progress: 20, totalLessons: 8 },
    { id: 'geography', name: 'Geography', icon: Globe, color: 'text-purple-500', progress: 40, totalLessons: 6 },
]

const lessonsData = {
    math: [
        {
            id: 'math-1',
            title: 'Introduction to Algebra',
            duration: '45 min',
            difficulty: 'Beginner',
            introduction: 'Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols.',
            exercises: [
                'Solve for x: 2x + 5 = 13',
                'Simplify: 3(x + 2) - 2(x - 1)',
            ],
            resources: [
                { title: 'Algebra Basics', url: 'https://example.com/algebra-basics' },
                { title: 'Practice Problems', url: 'https://example.com/algebra-practice' },
            ],
        },
        {
            id: 'math-2',
            title: 'Linear Equations',
            duration: '60 min',
            difficulty: 'Intermediate',
            introduction: 'Linear equations are equations where each term is either a constant or the product of a constant and a single variable.',
            exercises: [
                'Graph the line: y = 2x + 1',
                'Find the slope and y-intercept: 3x - 2y = 6',
            ],
            resources: [
                { title: 'Linear Equations Explained', url: 'https://example.com/linear-equations' },
                { title: 'Graphing Calculator', url: 'https://example.com/graphing-tool' },
            ],
        },
        // Add more math lessons here...
    ],
    science: [
        {
            id: 'science-1',
            title: 'Scientific Method',
            duration: '30 min',
            difficulty: 'Beginner',
            introduction: 'The scientific method is a systematic approach to investigating phenomena, acquiring new knowledge, or correcting and integrating existing knowledge.',
            exercises: [
                'Design an experiment to test the effect of sunlight on plant growth',
                'Identify the variables in the given experiment scenario',
            ],
            resources: [
                { title: 'Steps of the Scientific Method', url: 'https://example.com/scientific-method' },
                { title: 'Famous Experiments in History', url: 'https://example.com/famous-experiments' },
            ],
        },
        {
            id: 'science-2',
            title: 'Cell Biology',
            duration: '60 min',
            difficulty: 'Intermediate',
            introduction: 'Cell biology is the study of cell structure and function, and it revolves around the concept that the cell is the fundamental unit of life.',
            exercises: [
                'Label the parts of an animal cell',
                'Compare and contrast plant and animal cells',
            ],
            resources: [
                { title: 'Cell Structure and Function', url: 'https://example.com/cell-biology' },
                { title: 'Interactive Cell Model', url: 'https://example.com/cell-model' },
            ],
        },
        // Add more science lessons here...
    ],
    // Add literature and geography lessons following the same structure...
}





export default subjects
export {lessonsData}