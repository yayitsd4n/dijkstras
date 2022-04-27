function getLowestCost(costs, processed) {
    let lowest = null;
    for (let node of Object.keys(costs)) {
        if (!lowest || costs[node] < costs[lowest]) {
            if (!processed.includes(node)) {
                lowest = node;
            }
        }
    }

    return lowest;
}

function getShortestPath(parents, start, end) {
    let currentNode = end;
    let path = [];

    while (currentNode !== start) {
        path.unshift(currentNode);
        currentNode = parents[currentNode];
    }

    path.unshift(start);
    return path;
}

function dijkstras(graph, start, end) {
    const costs = {
        [start]: 0
    };
    const parents = {};
    const processed = [];

    let currentNode = start;
    while (currentNode) {
        const cost = costs[currentNode];
        const neighbors = graph[currentNode];

        for (let neighbor of Object.keys(neighbors)) {
            if (!costs[neighbor] || costs[neighbor] > cost + neighbors[neighbor]) {
                costs[neighbor] = cost + neighbors[neighbor];
                parents[neighbor] = currentNode;
            }
        }

        processed.push(currentNode);
        currentNode = getLowestCost(costs, processed);
    }

    return [getShortestPath(parents, start, end), costs[end]];
};

export default dijkstras;
