type DirectedNode = {
    inEdges: number[];
    outEdges: number[];
    inDegree: number;
};

const directedNode: DirectedNode = {
    inEdges: [],
    outEdges: [],
    inDegree: 0
};

// create createDirectedGraph(numCourse, prerequisites)
const createDirectedGraph = (numCourses: number, prerequisites: number[][]): Map<number, DirectedNode> => {
    // create Map
    const graph: Map<number, DirectedNode> = new Map();

    // iterate the numCourse
        // add directedNode to graph with num as key
    for (let course = 0; course < numCourses; course++) graph.set(course, structuredClone(directedNode));
    
    // iterate the prerequisites
    prerequisites.forEach(([course, dependency]) => {
        // get node from graph using 2nd number
        const node = graph.get(course);
        const dependencyNode = graph.get(dependency);
        // push first number into graphs inEdges
        node.inEdges.push(dependency);
        dependencyNode.outEdges.push(course);
        // increment inDegree
        node.inDegree++;
    });

    return graph;
};

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    // create graph Map
    const graph = createDirectedGraph(numCourses, prerequisites);
    // create result array
    const result: number[] = [];
    // create queue
    const queue: number[] = [];
    // iterate graph map
    graph.forEach((node, course) => {
        // if current nodes inDegree is zero, push into queue
        if (node.inDegree === 0) queue.push(course);
    });

    // while the queue is not empty
    while(queue.length > 0) {
        // create end with queue length
        const end = queue.length;

        // iterate until the end
        for (let i = 0; i < end; i++) {
            // deqeue queue
            const course = queue.shift(); 
            // push char into result
            result.push(course);
            // get node from graph using char
            const edge = graph.get(course);
            // iterate nodes inEdges
            edge.outEdges.forEach(inEdgeCourse => {
                // get inDegreeNode from graph with char
                const node = graph.get(inEdgeCourse);
                // decrement the inDegree
                node.inDegree--;
                // if the inDegree for this node is zero, push into queue
                if (node.inDegree === 0) queue.push(inEdgeCourse);
            });
           

        }
    }

    return result.length !== numCourses ? [] : result;
};