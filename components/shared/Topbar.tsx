import Link from "next/link";

function Topbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Link
        style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        href="/"
      >
        Threads
      </Link>

      <div>
        <Link style={{ marginRight: "1rem" }} href="/profile">
          Profile
        </Link>
        <Link href="/logout">Logout</Link>
      </div>
    </nav>
  );
}

export default Topbar;
