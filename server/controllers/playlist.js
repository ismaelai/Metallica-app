import {
  createPlaylistResource,
  deletePlaylistResource,
  getAllPlaylist,
  getPlaylistResourceById,
  updatePlaylistResource,
} from '../models/playlist.js';

// From the URL GET /albgetAllPlaylist
export const listgetAllPlaylist = async (request, response, next) => {
  try {
    const getAllPlaylistList = await getAllPlaylist();
    return response.status(200).send(getAllPlaylistList);
  } catch (error) {
    return response.status(500).send({
      message: `Error: connection to database failed, ${error}.`,
    });
  }
};

// From the URL GET /Playlist/:id
export const getPlaylistById = async (request, response, next) => {
  // From the request object we can know the URL parameters defined in the router
  const {
    params: { id },
  } = request;

  // Called a function that is declared in the resource model
  const PlaylistResource = await getPlaylistResourceById(id);

  // If we have a Playlist resource
  if (PlaylistResource) {
    // we return resource and 200 OK status
    return response.status(200).send(PlaylistResource);
  } else {
    // if not we sent 404 Resource not found, and a nice message
    return response.status(404).send({
      // Is important that messages that reflect errors finished with a full stop
      message: 'Error: Playlist resource not found.',
    });
  }
};

// POST /Playlist with JSON payload in the body
export const createPlaylist = async (request, response) => {
  // we get access to the data sent it by the client
  // TODO: In this step is IMPORTANT that we assume that the payload is malign
  // so we need to confirm otherwise validating payload (Please read about Joi https://hapi.dev/tutorials/validation/?lang=en_US)

  const { body } = request;

  try {
    // Called a function that is declared in the resource model
    const newPlaylistResource = await createPlaylistResource(body);
    return response.status(201).send(newPlaylistResource);
  } catch (error) {
    // Because Daytabases can be in other location we can't assume that every DB request is succesful
    return response.status(500).send({
      message: `Error: not connection to database, ${error}.`,
    });
  }
};

// From the URL PUT /Playlist/:id
export const updatePlaylistById = async (request, response) => {
  // we get access to the data sent it by the client
  const {
    params: { id },
    body,
  } = request;

  try {
    // Called a function that is declared in the resource model
    const PlaylistResource = await updatePlaylistResource(id, body);
    return response.status(200).send(PlaylistResource);
  } catch (error) {
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};

// From the URL DELETE /Playlist/:id
export const deletePlaylistById = async (request, response) => {
  // we get access to the data sent it by the client
  const {
    params: { id },
  } = request;

  try {
    // Called a function that is declared in the resource model
    const deleteMessage = await deletePlaylistResource(id);
    return response.status(200).send({
      message: deleteMessage,
    });
  } catch (error) {
    // if resource is not found send error message
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};
