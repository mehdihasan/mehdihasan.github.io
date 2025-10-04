---
title: "Hola mola"
date: "2025-10-04"
tags: ["k8s", "java"]
coverImage: "/images/kk/kafka.jpg"
---

How to use Java

```bash
pip install goc
```

```java
public class DijkstraOptimized {

    /**
     * Time Complexity: O ((V + E) LogV)
     *
     * @param src
     * @param adjList
     * @return
     */
    private List<Integer> dijkstraOptimized(int src, List<List<Pair>> adjList) {

        // defining and set defaults (max possible distance) from source to destination distance
        // adjList.size() == size of edges
        List<Integer> srcToTarDist = new ArrayList<>(adjList.size());
        for (int i = 0; i < adjList.size(); i++)
            srcToTarDist.add(i, Integer.MAX_VALUE);

        // setting init values
        Queue<Pair> queue = new PriorityQueue<>();
        queue.add(new Pair()
                .setVertex(src)
                .setEdgeWeight(0));     // setting edge weight 0 as distance from 0 to 0 is 0
        srcToTarDist.set(src, 0);

        int ops = 1;
        //
        while(!queue.isEmpty()) {
            Pair currPair = queue.poll();
            for (Pair conPair : adjList.get(currPair.vertex())) {
                // if the connected path is less than the direct path,
                // then a faster path available, we can perform path
                // relaxation.
                System.out.println("number of ops: " + ops++);
                int totalDist = currPair.edgeWeight() + conPair.edgeWeight();
                if (totalDist < srcToTarDist.get(conPair.vertex())) {
                    srcToTarDist.set(conPair.vertex(), totalDist);
                    queue.add(new Pair()
                            .setVertex(conPair.vertex())
                            .setEdgeWeight(totalDist));
                }
            }
        }

        return srcToTarDist;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int vertices, edges;
        vertices = scanner.nextInt();
        edges = scanner.nextInt();
        System.out.println(vertices);
        System.out.println(edges);
        List<List<Pair>> adjList = new ArrayList<>(vertices);
        for (int i = 0; i < vertices; i++) adjList.add(i, new ArrayList<>());
        while (edges > 0) {
            int vertex1 = scanner.nextInt();
            int vertex2 = scanner.nextInt();
            int edgeWeight = scanner.nextInt();
            adjList.get(vertex1)
                    .add(new Pair()
                            .setVertex(vertex2)
                            .setEdgeWeight(edgeWeight));
            adjList.get(vertex2)
                    .add(new Pair()
                            .setVertex(vertex1)
                            .setEdgeWeight(edgeWeight));
            edges--;
        }

        DijkstraOptimized djo = new DijkstraOptimized();
        List<Integer> srcToTarDist = djo.dijkstraOptimized(0, adjList);

        for (int i = 0; i < vertices; i++) {
            System.out.println(i + " -> " + srcToTarDist.get(i));
        }
    }
}
```
