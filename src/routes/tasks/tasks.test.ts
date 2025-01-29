import { describe, expect, expectTypeOf, it } from "vitest";
import createApp, { createTestApp } from "@/lib/create-app";
import { testClient } from "hono/testing"
import router from "./tasks.index";

describe("Tasks list", () => {
    it("responds with an array",async () =>{
        const testRouter = createTestApp(router)
        const responds = await testRouter.request("/tasks")
        const result = await responds.text()
        console.log(result)
        //@ts-expect-error
        expectTypeOf(result).toBeArray();
    })
    
    it("responds with an array again",async () =>{
        const client = testClient(createApp().route("/", router))
        const response = await client.tasks.$get();
        const json = await response.json()
        expectTypeOf(json).toBeArray()
    })

    it("validates the id param",async () =>{
        const client = testClient(createApp().route("/", router))
        const response = await client.tasks[":id"].$get({
            param: {
                id: "wat"
            }
        })
       expect(response.status).toBe(422)
    })
    
    it("validates the body when creating",async () =>{
        const client = testClient(createApp().route("/", router))
        const response = await client.tasks.$post({
            //@ts-expect-error
            json: {
                name: "Learn hono"
            }
        })
       expect(response.status).toBe(422)
    })
})
