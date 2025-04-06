import os

def print_directory_structure(start_path, excluded_dirs=None, prefix=""):
    if excluded_dirs is None:
        excluded_dirs = set()

    items = os.listdir(start_path)
    items.sort()

    for index, item in enumerate(items):
        item_path = os.path.join(start_path, item)
        connector = "┣" if index < len(items) - 1 else "┗"
        
        if os.path.isdir(item_path):
            if item not in excluded_dirs:
                print(f"{prefix}{connector} 📂 {item}   ")
                new_prefix = prefix + ("┃ " if index < len(items) - 1 else "  ")
                print_directory_structure(item_path, excluded_dirs, new_prefix)
        else:
            print(f"{prefix}{connector} 📜 {item}   ")

directory = "."
excluded_dirs = {"node_modules", ".next", ".git", "public", "build"}
print(f"📂 {os.path.basename(directory)}  ")
print_directory_structure(directory, excluded_dirs)
