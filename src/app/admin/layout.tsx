import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const reqHeaders = await headers();
    const session = await auth.api.getSession({
        headers: reqHeaders,
    });

    if (!session) {
        redirect("/admin-login");
    }

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 border-r bg-slate-50 flex flex-col">
                <div className="h-16 flex items-center px-6 border-b">
                    <Link href="/" className="font-serif font-bold text-xl hover:text-slate-700">
                        saqib.thinks <span className="text-xs bg-slate-200 px-1 py-0.5 rounded font-sans ml-1 text-slate-800">Admin</span>
                    </Link>
                </div>
                <nav className="p-4 space-y-1 flex-1">
                    <Link href="/admin" className="block px-3 py-2 text-sm font-medium rounded-md bg-slate-200 text-slate-900">
                        Dashboard
                    </Link>
                    <Link href="/admin/posts/new" className="block px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-100 hover:text-slate-900">
                        New Article
                    </Link>
                </nav>
                <div className="p-4 border-t">
                    <form action="/api/auth/signout" method="post">
                        <button type="submit" className="w-full text-left px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md">
                            Sign out
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-white">
                {children}
            </main>
        </div>
    );
}
