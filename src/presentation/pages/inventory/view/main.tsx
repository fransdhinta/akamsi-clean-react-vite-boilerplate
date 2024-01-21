import { Controller } from "react-hook-form"
import { Button, Grid, Image, Paper, TextInput } from "@mantine/core"
import { FaSearch } from "react-icons/fa"
import { FaBarcode, FaPlus } from "react-icons/fa6"

import "./style.css"
import { useInventory } from "@/src/presentation/state/inventory/state"

function MainContent() {
  const { control, filterValue, setFilterValue, inventoryList, filters } =
    useInventory()
  return (
    <div className="felx flex-col">
      <div
        className="flex flex-row"
        style={{ justifyContent: "space-between" }}
      >
        <div className="w-[90%]">
          <Controller
            name="searchValue"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextInput
                {...field}
                leftSectionPointerEvents="none"
                leftSection={<FaSearch />}
                placeholder="Search Items"
                error={error?.message}
                size="xl"
                radius={"md"}
              />
            )}
          />
        </div>
        <div className="w-[8%]">
          {/* <Paper
            radius="lg"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "60px",
              background: "#00b6ff",
              color: "#000000",
              cursor: "pointer",
            }}
          >
            <FaBarcode weigth={700} size={55} />
          </Paper> */}
          <Button style={{ height: "60px" }}>Search</Button>
        </div>
      </div>
      <div className="flex flex-row h-[40px] mt-[20px]">
        {filters.map((fil, index) => {
          return (
            <Paper
              key={index}
              draggable
              onClick={() => {
                setFilterValue(fil.val)
              }}
              px={20}
              radius="lg"
              shadow={filterValue === fil.val ? "md" : ""}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: "40px",
                fontWeight: 700,
                background: filterValue === fil.val ? "#00b6ff" : "#ffffff",
                color: filterValue === fil.val ? "#FFFFFF" : "#000000",
                cursor: "pointer",
                marginInline: "5px",
              }}
            >
              {fil.text}
            </Paper>
          )
        })}
      </div>
      <Grid
        classNames={{
          root: "hid",
        }}
        style={{
          marginBlockStart: "25px",
          overflow: "scroll",
          maxHeight: "70vh",
        }}
        className=""
      >
        <Grid.Col span={3}>
          <Paper
            px={20}
            py={15}
            radius="lg"
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "row",
              height: "120px",
              justifyContent: "space-between",
            }}
          >
            <div
              className="flex flex-col"
              style={{ justifyContent: "space-between" }}
            >
              <div style={{ color: "#000000", fontWeight: 600 }}>Add Item</div>
              <div style={{ color: "#FFCD00", fontWeight: 600 }}>
                Input Item Data
              </div>
            </div>
            <div
              className="flex flex-col"
              style={{ alignItems: "flex-end", justifyContent: "center" }}
            >
              <FaPlus size={80} />
            </div>
          </Paper>
        </Grid.Col>

        {inventoryList.map((item, index) => {
          return (
            <Grid.Col span={3} key={index}>
              <Paper
                px={20}
                py={15}
                radius="lg"
                style={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "row",
                  height: "120px",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="flex flex-col"
                  style={{ justifyContent: "space-between" }}
                >
                  <div>
                    <div
                      style={{
                        color: "#000000",
                        fontSize: "15px",
                        fontWeight: 600,
                      }}
                    >
                      {item.name}
                    </div>
                    <div
                      style={{
                        color: "#000000",
                        fontSize: "15px",
                        fontWeight: 400,
                      }}
                    >
                      {item.description}
                    </div>
                  </div>
                  <div
                    style={{
                      color: "#FFCD00",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    Rp. {item.price.toLocaleString()}
                  </div>
                </div>
                <div
                  className="flex flex-col"
                  style={{ alignItems: "flex-end", justifyContent: "center" }}
                >
                  <Image
                    radius="md"
                    src={item.image || "/dummy_image.png"}
                    maw={80}
                  />
                </div>
              </Paper>
            </Grid.Col>
          )
        })}
      </Grid>
    </div>
  )
}

export default MainContent
