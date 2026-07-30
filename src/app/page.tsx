import Code from "@/components/code";

export default function Home() {
  return (
    <>
      <h1 className="mb-2 text-6xl font-thin">Hello world</h1>
      <p className="my-2">
        Welcome to my <em>super awesome</em> website!
      </p>

      <Code
        language="python"
        code={`
            def main():
              print("You rock!")
          `}
      />
      <p className="mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, non
        sunt! Ab architecto dicta ducimus ipsam molestias necessitatibus
        perferendis, quos tempore velit vero. Deserunt eum fugit hic quibusdam
        quis similique!
      </p>
      <p className="mt-2">
        Ex expedita, explicabo neque numquam quasi quo unde velit voluptatum!
        Blanditiis excepturi fugit maiores odit, quibusdam repellat voluptas! Ab
        atque doloribus eum explicabo, harum labore maxime officia perspiciatis
        similique vel.
      </p>
      <p className="mt-2">
        Adipisci facilis in molestias non vero! Aliquid animi at dolorum facilis
        magnam neque quae ratione reiciendis repellendus unde veritatis, vero.
        Aliquid dolore doloribus expedita minus, non quo rem tenetur vel!
      </p>
      <p className="mt-2">
        Culpa laudantium nihil perspiciatis repellat suscipit totam? Deleniti,
        nulla, tenetur. Cumque eligendi, error! Ab dolores earum esse ipsa nam
        optio quas quibusdam? Asperiores corporis esse ipsa maxime non numquam
        perferendis.
      </p>
      <p className="mt-2">
        Aliquam, asperiores debitis dolorem eos id nostrum officiis quae ratione
        similique? Ab aliquid fuga illum neque nesciunt odit quos ratione
        recusandae veniam voluptatem. Delectus eum in voluptatibus. Officia,
        quaerat voluptatum.
      </p>
      <p className="mt-2">
        Blanditiis cumque deserunt dolore earum ipsum omnis reprehenderit vitae,
        voluptates. Ducimus eligendi est expedita laboriosam natus odit
        provident quia similique soluta totam velit, veritatis, voluptatibus.
        Aliquid et minima possimus quas.
      </p>
      <p className="mt-2">
        Ab accusamus architecto autem commodi corporis cum, dolorum et eveniet
        ex maiores nemo nulla placeat praesentium quis quisquam reiciendis
        repellat sequi, suscipit temporibus vel veniam voluptas voluptatem
        voluptates. Neque, sed.
      </p>
      <p className="mt-2">
        Ad beatae commodi consectetur consequatur consequuntur dignissimos,
        dolore ea, eaque enim exercitationem facilis impedit iure laborum
        laudantium maiores maxime nemo nisi odio perspiciatis quos reiciendis
        repellendus sequi, ut voluptate voluptatibus.
      </p>
      <p className="mt-2">
        Ad adipisci aliquid architecto aut consectetur cupiditate delectus
        dolorum eius eligendi eos ex expedita facere maxime minus nemo non
        obcaecati, possimus quia reprehenderit sed sequi vel velit vitae!
        Cumque, ratione?
      </p>
      <p className="mt-2">
        Ad, aliquid autem dolores eligendi harum labore laudantium magnam
        maiores porro rerum, sunt vel. Animi atque dolorum est hic id, labore
        molestias rerum tempora? Incidunt ipsam mollitia neque nostrum sapiente!
      </p>
    </>
  );
}
