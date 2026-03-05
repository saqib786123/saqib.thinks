export function Footer() {
    return (
        <footer className="border-t py-12 md:py-16 bg-muted/40">
            <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0 text-center md:text-left">
                    <p className="text-sm leading-loose text-muted-foreground">
                        Built for thoughtful reading. <br className="hidden md:inline" />
                        &copy; {new Date().getFullYear()} saqib.thinks. All rights reserved.
                    </p>
                </div>
                <div className="flex gap-4 items-center">
                    <a
                        href="#"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Twitter
                    </a>
                    <a
                        href="#"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
