import HttpClient from "@Services/service";

const HookHomeList = (page = 1, name = "", filterBy = "") => {
  try {
    const response = HttpClient.get(
      `users?page=${page}${name ? `&${filterBy}=${name}` : ""}&per_page=20`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { HookHomeList };
