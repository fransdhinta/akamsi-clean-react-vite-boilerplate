import { Button, Divider, Flex, Grid } from "@mantine/core"
import { useHome } from "../state/home/state"
import { router } from "@/src/common/routes"

const Home = () => {
  const {
    // base
    count,
    decrease,
    increase,
    reset,
    setCount,
    // persist
    persistCount,
    persistDecrease,
    persistIncrease,
    persistReset,
    persistSetCount,
  } = useHome()
  return (
    <div className="bg-blue-300  font-bold w-screen h-screen flex flex-col justify-center items-center ">
      <p className="text-white text-6xl">AKAMSI REACT VITE</p>
      <Flex
        mt={"10vh"}
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <div>State</div>
        <Grid>
          <Grid.Col
            display={"flex"}
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {count}
          </Grid.Col>
        </Grid>
        <Grid gutter={"lg"}>
          <Grid.Col span={4}>
            <Button
              onClick={() => {
                increase()
              }}
            >
              Increase (+)
            </Button>
          </Grid.Col>
          <Grid.Col span={4}>
            <Button
              onClick={() => {
                decrease()
              }}
            >
              Decrease (-)
            </Button>
          </Grid.Col>
          <Grid.Col span={4}>
            <Button
              onClick={() => {
                reset()
              }}
            >
              Reset
            </Button>
          </Grid.Col>
        </Grid>
        <div>Persist State</div>
        <Grid>
          <Grid.Col
            display={"flex"}
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {persistCount}
          </Grid.Col>
        </Grid>
        <Grid gutter={"lg"}>
          <Grid.Col span={4}>
            <Button
              onClick={() => {
                persistIncrease()
              }}
            >
              Increase (+)
            </Button>
          </Grid.Col>
          <Grid.Col span={4}>
            <Button
              onClick={() => {
                persistDecrease()
              }}
            >
              Decrease (-)
            </Button>
          </Grid.Col>
          <Grid.Col span={4}>
            <Button
              onClick={() => {
                persistReset()
              }}
            >
              Reset
            </Button>
          </Grid.Col>
        </Grid>

        <Button
          onClick={async () => {
            await router.navigate({
              to: "/inventory",
            })
          }}
        >
          Go To Inventory
        </Button>
      </Flex>
    </div>
  )
}

export default Home
