import 'node-self';
import 'node-fetch';
import * as matrixAPI from 'matrix-requirements-api';

const token = "Token api_..."
const server = "https://<yourmatrixinstance>"
const restServer = `${server}/rest/1`
const api = matrixAPI.CreateConsoleAPI(token, restServer, server);

try {
	api.setComment("Test")
	const project = await api.openProject('DEMO');	

	const item = project.createItem("UC")
	item.setTitle("From API")

	const description = item.getSingleFieldByName("Description")
	const handler = description.getHandler()
	handler.setHtml("This is the description")	
	
	const savedItem = await project.putItem("F-UC-1", item)
	console.log("Save result", savedItem)
} catch (e) {
	console.log("Error", e)
}
