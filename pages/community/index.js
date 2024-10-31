import React, { useEffect, useState } from "react";
import axios from "axios";
import globalConfig from "config";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import Avatar from "@/components/Avatar";
import { parseCookies } from "nookies";
import Image from "next/image";

const port = globalConfig.port;

const CommunityPosts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [newComment, setNewComment] = useState({});
  const [expandedPosts, setExpandedPosts] = useState({});
  const [userId, setUserId] = useState("");
  const [cookie] = useCookies(["prabishaemail"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [userNames, setUserNames] = useState({}); // To store user ID to username mapping
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [dropdownIndex, setDropdownIndex] = useState("");

  useEffect(() => {
    const cookies = parseCookies();
    const storedUserData = cookies.gii;

    if (!cookies.gii || !storedUserData) {
      setUser(null);
      router.push("/");
    } else {
      // Parse the JSON string to get the complete user details
      const userData = JSON.parse(storedUserData);
      setUser(userData);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUserName = async (userId) => {
    if (userNames[userId]) return; // If already fetched, skip

    try {
      const response = await axios.get(
        `${port}/get-username-by-id?user_id=${userId}`
      );
      console.log(response.data.data.name, "response");
      setUserNames((prev) => ({
        ...prev,
        [userId]: response.data.data.name,
      }));
    } catch (err) {
      console.error("Error fetching username:", err);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${port}/get-community-post-approved`, {
        params: {
          searchTerm: searchTerm,
          selectedTag: selectedTag,
        },
      });

      const postsData = response.data;

      console.log(postsData[0].content, "postsData");

      setPosts(postsData);
      setFilteredPosts(postsData);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [searchTerm, selectedTag]);

  useEffect(() => {
    let filtered = posts;

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedTag !== "All") {
      filtered = filtered.filter(
        (post) =>
          post.tags &&
          post.tags
            .toLowerCase()
            .split(",")
            .map((tag) => tag.trim())
            .includes(selectedTag.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedTag, posts]);

  const handleCommentChange = (postId, content) => {
    setNewComment({
      ...newComment,
      [postId]: content,
    });
  };

  const handleCommentSubmit = async (postId) => {
    try {
      await axios.post(`${port}/community-post-comments`, {
        post_id: postId,
        content: newComment[postId],
        user_name: user.name || "Unknown user",
      });

      setNewComment({
        ...newComment,
        [postId]: "",
      });

      await fetchPosts();
    } catch (err) {
      console.error("Error submitting comment:", err);
    }
  };

  const toggleExpand = (postId) => {
    setExpandedPosts({
      ...expandedPosts,
      [postId]: !expandedPosts[postId],
    });
  };

  const truncateContent = (content, limit = 150) => {
    if (content.length <= limit) return content;
    return content.slice(0, limit) + "...";
  };

  const formatDate = (inputDate) => {
    const dateParts = inputDate.split("/"); // Split the date string by '/'
    const formattedDate = new Date(
      `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
    ); // Rearrange into 'YYYY-MM-DD'

    return formattedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const toggleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(`${port}/community-delete/${id}`);
      console.log(res);
      fetchPosts();
      toggleDropdown();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-custom">
      <div className="sidebar">
        <h5>Filters</h5>

        <select
          className="form-select mb-3"
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value="All">All Tags</option>
          <option value="Tech">Tech</option>
          <option value="Education">Education</option>
          <option value="Business">Business</option>
          <option value="Politics">Politics</option>
          <option value="Health">Health</option>
          <option value="Science">Science</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Sports">Sports</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Travel">Travel</option>
          <option value="Finance">Finance</option>
          <option value="Food">Food</option>
          <option value="Fashion">Fashion</option>
          <option value="Environment">Environment</option>
          <option value="Art">Art</option>
          <option value="Culture">Culture</option>
          <option value="Education">Education</option>
        </select>

        <div className="ad-images">
        <div className="mb-2">
          <img src="/uploads/ad2.jpg" />
        </div>
        <div className="mb-2">
          <img src="/uploads/ad1.jpg" />
        </div>
      </div>
      </div>

      <div className="content p-5">
        <div className="flex justify-content-end mb-4">
          <input
            type="text"
            className="form-control "
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />{" "}
          <button
            className="button add-question-btn mt-0"
            style={{
              width: "300px",

              color: "#fff",
              border: "none",
              borderRadius: "50px",
              padding: "10px 5px",
              fontSize: "16px",
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onClick={() => router.push("/community/community-post")}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            Create Post
          </button>
        </div>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className="community_card mb-4 bg-white shadow-full "
              style={{ overflow: "scroll" }}
            >
              <div className="card-body-community p-3 ">
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "start",
                    justifyItems: "center",
                  }}
                >
                  <div>
                    <Avatar name={post.user_name || "Unknown User"} />
                  </div>
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        position: "relative",
                        width: "100%",
                        gap: "10px",
                      }}
                    >
                      <div>
                        <h6
                          className="card-title"
                          style={{
                            fontWeight: "700",
                            lineHeight: "26px",
                            fontSize: "20px",
                            textTransform: "capitalize",
                          }}
                        >
                          {truncateContent(post.title)}
                        </h6>
                        <small
                          className="text-muted"
                          style={{ fontFamily: "monospace" }}
                        >
                          Posted by {post.user_name || "Unknown User"}
                        </small>
                        <p
                          style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            textTransform: "capitalize",
                          }}
                        >
                          Tags - <b>{post.tags}</b> |{" "}
                          {formatDate(post.created_at)}
                        </p>
                      </div>
                      {(post.user_name == user?.name ||
                        user?.email == "info@prabisha.com") && (
                        <div>
                          <h6
                            onClick={() => toggleDropdown(index)}
                            style={{ cursor: "pointer" }}
                          >
                            ...
                          </h6>
                          {dropdownIndex === index && (
                            <div
                              className="action_div"
                              style={{
                                position: "absolute",
                                right: 5,
                                width: "30px",
                                cursor: "pointer",
                              }}
                            >
                              <p
                                style={{ fontSize: "12px", margin: "0px" }}
                                className=""
                                onClick={() => handleDelete(post.id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="size-2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                  />
                                </svg>
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <p
                      className="card-text mb-3"
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        textTransform: "capitalize",
                        overflow: "hidden",
                      }}
                    >
                      {expandedPosts[post.id]
                        ? post.content
                        : truncateContent(post.content)}
                      <button
                        style={{
                          backgroundColor: "white",
                          border: "none",
                          color: "blue",
                          fontWeight: "500",
                        }}
                        onClick={() => toggleExpand(post.id)}
                      >
                        {expandedPosts[post.id] ? "(less)" : "(more)"}
                      </button>
                    </p>
                  </div>
                </div>

                {post.post_image && (
                  <img
                    src={post.post_image}
                    alt="image"
                    className="img-fluid cover rounded mb-3"
                    style={{ height: "400px", width: "100%" }}
                  />
                )}
                <hr />
                <h6 style={{ marginLeft: "30px" }}>Comments</h6>
                <ul
                  className="list-group list-group-flush"
                  style={{ marginLeft: "20px" }}
                >
                  {post.comments.length > 0 ? (
                    post.comments.map((comment) => (
                      <li key={comment.id} className="list-group-item">
                        <div
                          style={{
                            display: "flex",
                            gap: "20px",
                            justifyContent: "start",
                            justifyItems: "center",
                          }}
                        >
                          <div>
                            <Avatar name={post.user_name || "Unknown User"} />
                          </div>
                          <div className="">
                            <p
                              className="mt-2"
                              style={{ textTransform: "capitalize" }}
                            >
                              {comment.content}
                              <br />
                              <p
                                className="text-muted "
                                style={{ fontFamily: "monospace" }}
                              >
                                Commented by {post.user_name || "Unknown User"}{" "}
                                on {formatDate(comment.created_at)}
                              </p>
                            </p>
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <li className="list-group-item">
                      No comments yet. Be the first to comment!
                    </li>
                  )}
                </ul>
                <div
                  className="position-relative mt-3"
                  style={{ width: "100%" }}
                >
                  <textarea
                    className="form-control"
                    rows="2"
                    value={newComment[post.id] || ""}
                    onChange={(e) =>
                      handleCommentChange(post.id, e.target.value)
                    }
                    placeholder="Add a comment..."
                    style={{ paddingRight: "60px" }} // Add padding to accommodate the button inside
                  ></textarea>
                  <button
                    className="btn  position-absolute"
                    style={{
                      right: "10px",
                      bottom: "15px",
                      border: "none",
                      background: "none",
                      color: "blue",
                      padding: "0",
                    }}
                    onClick={() => handleCommentSubmit(post.id)}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>

      <div className="ad-images sidebar sidebar-right">
        <div className="mb-2">
          <img src="/uploads/blogs_ad.jpg" />
        </div>
        <div className="mb-2">
          <img src="/uploads/ad2.jpg" />
        </div>
      </div>
    </div>
  );
};

export default CommunityPosts;
