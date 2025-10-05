---
title: "Test article"
date: "2025-10-04"
tags: ["k8s", "java"]
coverImage: "/images/kk/kafka.jpg"
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan est nunc, ut semper nisl elementum ac. Maecenas lacus dolor, vulputate ac commodo a, posuere eget dolor. Sed vitae orci risus. Ut lacinia lectus eu augue malesuada malesuada. Sed dignissim tortor nec accumsan tempus. Quisque non egestas ipsum. Fusce placerat finibus nisl quis eleifend. Praesent fermentum at ex at tempus.

Vestibulum venenatis convallis mi ac faucibus. Aliquam augue quam, porttitor ut pretium et, laoreet quis dolor. Proin maximus dolor elit, ac laoreet tellus interdum in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras eu placerat dui. In hac habitasse platea dictumst. Vestibulum lobortis finibus ligula, et euismod sem suscipit sit amet. Nulla justo purus, hendrerit rhoncus bibendum sagittis, posuere vel massa. Quisque id augue rutrum, consequat nisl id, dignissim nibh. Aliquam eu nisl felis. Pellentesque risus diam, commodo non neque eu, semper condimentum enim. Ut at ante vel nunc porta efficitur. Aenean sit amet mi non sapien gravida feugiat sit amet sed nisl.

Integer massa turpis, viverra eu quam sed, interdum aliquam nunc. Quisque egestas arcu in dolor aliquam, at volutpat leo mollis. Sed consequat blandit quam. Proin congue eget augue non efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex lectus, posuere porttitor egestas eu, fermentum et sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras tristique non felis in accumsan. Nunc at justo dignissim mauris elementum elementum. Etiam dolor lacus, iaculis eget sapien et, dapibus scelerisque lacus. Cras porta scelerisque augue quis auctor.


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
