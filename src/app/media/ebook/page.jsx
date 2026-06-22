"use client";

import { useState } from "react";
import MainLayout from "../../../components/templates/MainLayout";

import {
  BookOpen,
  Moon,
  Sun,
  Bell,
  Search,
  PlayCircle,
  Clock3,
  ChevronLeft,
  LogOut,
} from "lucide-react";

/* =====================================
COURSE DATA
===================================== */

const books = [
  {
    id: 1,
    active: true,
    title: "Pre Assembly Operator Training Book",
    description:
      "Professional footwear manufacturing training course.",
    category: "Footwear",
    duration: "4h 30m",
    students: "1,245",
    progress: 65,
    instructor: "Scale India",
    pdf: "/pdf/(Pre Assembly Operator - Footwear.pdf",
    cover:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",

    modules: [
      {
        id: 1,
        name: "Introduction",
        page: 1,
        duration: "10 min",
        video: "https://www.youtube.com/embed/QF3ZZeSoufE",
      },
      {
        id: 2,
        name: "Splitting Operation",
        page: 6,
        duration: "25 min",
        video:
          "https://www.youtube.com/embed/HGNHHLnSnWo",
      },
      {
        id: 3,
        name: "Stamping Process",
        page: 12,
        duration: "20 min",
        video:
          "https://www.youtube.com/embed/FxW0noE7nBk",
      },
    ],
  },

  {
    id: 2,
    active: true,
    title: "Leather Manufacturing Basics",
    description:
      "Complete introduction to leather manufacturing.",
    category: "Leather",
    duration: "3h 20m",
    students: "845",
    progress: 35,
    instructor: "Scale India",
    pdf: "/pdf/(Pre Assembly Operator - Footwear.pdf",
    cover:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8",

    modules: [
      {
        id: 1,
        name: "Leather Intro",
        page: 2,
        duration: "12 min",
        video: "https://www.youtube.com/embed/QF3ZZeSoufE",
      },
    ],
  },

  /* =====================================
  DUMMY BOOKS
  ===================================== */

  {
    id: 3,
    active: false,
    title: "Advanced Shoe Design",
    description: "Premium footwear designing masterclass.",
    category: "Design",
    duration: "5h 10m",
    students: "2,145",
    progress: 0,
    cover:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },

  {
    id: 4,
    active: false,
    title: "Industrial Safety Training",
    description: "Factory and workplace safety training.",
    category: "Safety",
    duration: "2h 45m",
    students: "1,450",
    progress: 0,
    cover:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },

  {
    id: 5,
    active: false,
    title: "Machine Operator Course",
    description: "Industrial machine operating basics.",
    category: "Machine",
    duration: "4h",
    students: "950",
    progress: 0,
    cover:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
  },

  {
    id: 6,
    active: false,
    title: "Quality Checking",
    description: "Learn product quality inspection.",
    category: "Quality",
    duration: "3h",
    students: "650",
    progress: 0,
    cover:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
];

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  const [selectedBook, setSelectedBook] = useState(null);

  const [selectedModule, setSelectedModule] =
    useState(null);

  const [pdfPage, setPdfPage] = useState(1);

  const [search, setSearch] = useState("");

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [showLogin, setShowLogin] =
    useState(false);

  const [profileOpen, setProfileOpen] =
    useState(false);

  const userProfile = {
    name: "Yusuff",
    email: "yusuff@gmail.com",
    role: "Student",
    avatar: "https://i.pravatar.cc/150?img=12",
  };

  /* =====================================
  FILTER
  ===================================== */

  const filteredBooks = books.filter((book) =>
    book.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  /* =====================================
  MODULE CLICK
  ===================================== */

  const handleModuleClick = (module) => {
    setSelectedModule(module);
    setPdfPage(module.page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <MainLayout>
      <div
        className={`min-h-screen transition-all duration-300 ${
          darkMode
            ? "bg-[#020617] text-white"
            : "bg-[#f8fafc] text-black"
        }`}
      >
        {/* HEADER */}

        <header
          className={`sticky top-0 z-50 backdrop-blur-xl border-b ${
            darkMode
              ? "bg-[#020617]/80 border-white/10"
              : "bg-white/90 border-gray-200"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
            {/* LEFT */}

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                <BookOpen size={22} />
              </div>

              <div>
                <h1 className="font-bold text-2xl">
                  Scale LMS
                </h1>

                <p className="text-xs opacity-70">
                  Professional Learning Platform
                </p>
              </div>
            </div>

            {/* SEARCH */}

            <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
              <Search
                className="absolute left-4 top-3 opacity-60"
                size={18}
              />

              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className={`w-full pl-12 pr-4 py-3 rounded-2xl outline-none ${
                  darkMode
                    ? "bg-white/10 border border-white/10"
                    : "bg-gray-100 border border-gray-200"
                }`}
              />
            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-3">
              <button
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  darkMode
                    ? "bg-white/10"
                    : "bg-gray-100"
                }`}
              >
                <Bell size={18} />
              </button>

              <button
                onClick={() =>
                  setDarkMode(!darkMode)
                }
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  darkMode
                    ? "bg-white/10"
                    : "bg-gray-100"
                }`}
              >
                {darkMode ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>

              {!isLoggedIn ? (
                <button
                  onClick={() =>
                    setShowLogin(true)
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-2xl font-semibold transition"
                >
                  Login
                </button>
              ) : (
                <div className="relative">
                  <button
                    onClick={() =>
                      setProfileOpen(
                        !profileOpen
                      )
                    }
                    className="flex items-center gap-3"
                  >
                    <img
                      src={userProfile.avatar}
                      alt="profile"
                      className="w-12 h-12 rounded-2xl object-cover border-2 border-blue-500"
                    />

                    <div className="hidden md:block text-left">
                      <h3 className="font-semibold text-sm">
                        {userProfile.name}
                      </h3>

                      <p className="text-xs opacity-70">
                        {userProfile.role}
                      </p>
                    </div>
                  </button>

                  {profileOpen && (
                    <div
                      className={`absolute right-0 mt-4 w-[300px] rounded-3xl overflow-hidden shadow-2xl z-50 ${
                        darkMode
                          ? "bg-[#0f172a] border border-white/10"
                          : "bg-white border border-gray-200"
                      }`}
                    >
                      <div className="p-6">
                        <div className="flex items-center gap-4">
                          <img
                            src={
                              userProfile.avatar
                            }
                            alt="profile"
                            className="w-16 h-16 rounded-2xl"
                          />

                          <div>
                            <h2 className="font-bold text-lg">
                              {
                                userProfile.name
                              }
                            </h2>

                            <p className="opacity-70 text-sm">
                              {
                                userProfile.email
                              }
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setIsLoggedIn(
                              false
                            );

                            setProfileOpen(
                              false
                            );
                          }}
                          className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2"
                        >
                          <LogOut size={18} />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* HOME PAGE */}

        {!selectedBook && (
          <>
            {/* HERO */}

            <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold">
                    🚀 Industry 4.0 Learning Platform
                  </div>

                  <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-6">
                    Learn Skills.
                    <br />
                    Build Careers.
                  </h1>

                  <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl">
                    Professional LMS platform
                    for footwear, leather
                    manufacturing and
                    industrial workforce
                    training.
                  </p>
                </div>

                <div>
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                    alt="students"
                    className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                  />
                </div>
              </div>
            </section>

            {/* COURSES */}

            <section className="max-w-7xl mx-auto px-4 md:px-6 pb-16">
              <h2 className="text-3xl font-bold mb-8">
                Popular Courses
              </h2>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">
                {filteredBooks.map((book) => (
                  <div
                    key={book.id}
                    className={`rounded-3xl overflow-hidden shadow-xl transition hover:-translate-y-2 duration-300 ${
                      darkMode
                        ? "bg-[#0f172a] border border-white/10"
                        : "bg-white border border-gray-200"
                    }`}
                  >
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="h-60 w-full object-cover"
                    />

                    <div className="p-5">
                      <div className="inline-block bg-blue-600/10 text-blue-600 text-xs px-3 py-1 rounded-full mb-3">
                        {book.category}
                      </div>

                      <h2 className="font-bold text-xl">
                        {book.title}
                      </h2>

                      <p className="text-sm opacity-70 mt-3">
                        {book.description}
                      </p>

                      <div className="flex gap-4 mt-4 text-xs opacity-70">
                        <div className="flex items-center gap-1">
                          <Clock3 size={14} />
                          {book.duration}
                        </div>

                        <div>
                          👨‍🎓 {book.students}
                        </div>
                      </div>

                      {/* ACTIVE BOOK */}

                      {book.active ? (
                        <button
                          onClick={() => {
                            setSelectedBook(
                              book
                            );

                            setSelectedModule(
                              book.modules?.[0]
                            );

                            setPdfPage(
                              book.modules?.[0]
                                ?.page || 1
                            );

                            // SCROLL TOP

                            window.scrollTo({
                              top: 0,
                              behavior:
                                "smooth",
                            });
                          }}
                          className="mt-6 w-full py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <PlayCircle size={18} />
                          Continue Learning
                        </button>
                      ) : (
                        <button className="mt-6 w-full py-3 rounded-2xl font-semibold bg-gray-300 text-gray-600 cursor-not-allowed">
                          Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* COURSE VIEW */}

        {selectedBook && selectedModule && (
          <div className="flex flex-col lg:flex-row gap-5 p-5">
            {/* SIDEBAR */}

            <div
              className={`lg:w-[320px] rounded-3xl p-5 ${
                darkMode
                  ? "bg-[#0f172a] border border-white/10"
                  : "bg-white border border-gray-200"
              }`}
            >
              <button
                onClick={() => {
                  setSelectedBook(null);

                  setSelectedModule(null);

                  setPdfPage(1);

                  // SCROLL TOP

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="flex items-center gap-2 text-blue-500 font-semibold mb-6"
              >
                <ChevronLeft size={18} />
                Back
              </button>

              <img
                src={selectedBook.cover}
                alt="course"
                className="rounded-2xl h-48 w-full object-cover"
              />

              <h2 className="font-bold text-2xl mt-5">
                {selectedBook.title}
              </h2>

              <div className="space-y-3 mt-6">
                {selectedBook.modules.map(
                  (m, index) => (
                    <div
                      key={m.id}
                      onClick={() =>
                        handleModuleClick(m)
                      }
                      className={`p-4 rounded-2xl cursor-pointer transition ${
                        selectedModule.id ===
                        m.id
                          ? "bg-blue-600 text-white"
                          : darkMode
                          ? "bg-white/5 hover:bg-white/10"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      <p className="text-xs opacity-70">
                        Module {index + 1}
                      </p>

                      <h3 className="font-semibold mt-1">
                        {m.name}
                      </h3>

                      <p className="text-xs mt-1 opacity-70">
                        PDF Page: {m.page}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div className="flex-1 grid xl:grid-cols-2 gap-5">
              {/* VIDEO */}

              <div
                className={`rounded-3xl overflow-hidden shadow-xl ${
                  darkMode
                    ? "bg-[#0f172a] border border-white/10"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div className="p-5 border-b border-gray-200">
                  <h2 className="text-2xl font-bold">
                    {selectedModule.name}
                  </h2>

                  <p className="opacity-70 mt-2">
                    Video Lesson
                  </p>
                </div>

                <div className="p-4">
                  <div className="relative aspect-video overflow-hidden rounded-3xl bg-black">
                    <iframe
                      src={`${selectedModule.video}?autoplay=1`}
                      title="Course Video"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* PDF */}

              <div
                className={`rounded-3xl overflow-hidden shadow-xl ${
                  darkMode
                    ? "bg-[#0f172a] border border-white/10"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div className="p-5 border-b border-gray-200">
                  <h2 className="font-bold text-2xl">
                    PDF Notes
                  </h2>

                  <p className="opacity-70 text-sm mt-1">
                    Page {pdfPage}
                  </p>
                </div>

                <iframe
                  key={pdfPage}
                  src={`${selectedBook.pdf}#page=${pdfPage}`}
                  className="w-full h-[900px]"
                />
              </div>
            </div>
          </div>
        )}

        {/* LOGIN MODAL */}

        {showLogin && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div
              className={`w-full max-w-md rounded-3xl p-8 shadow-2xl ${
                darkMode
                  ? "bg-[#0f172a]"
                  : "bg-white"
              }`}
            >
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold">
                    Login
                  </h2>

                  <p className="opacity-70 mt-2">
                    Continue learning
                  </p>
                </div>

                <button
                  onClick={() =>
                    setShowLogin(false)
                  }
                  className="text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`w-full p-4 rounded-2xl outline-none ${
                    darkMode
                      ? "bg-white/10 border border-white/10"
                      : "bg-gray-100 border border-gray-200"
                  }`}
                />

                <input
                  type="password"
                  placeholder="Password"
                  className={`w-full p-4 rounded-2xl outline-none ${
                    darkMode
                      ? "bg-white/10 border border-white/10"
                      : "bg-gray-100 border border-gray-200"
                  }`}
                />

                <button
                  onClick={() => {
                    setIsLoggedIn(true);

                    setShowLogin(false);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl text-white font-semibold"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}