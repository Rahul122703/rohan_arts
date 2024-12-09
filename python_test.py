import os

def rename_pics(folder_path):
    # List all files in the folder
    files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]

    # Filter image files (optional, based on extensions)
    image_files = [f for f in files if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp'))]

    # Rename files
    for index, file in enumerate(image_files, start=1):
        file_extension = os.path.splitext(file)[1]  # Get file extension
        new_name = f"art_{index}{file_extension}"  # Create new name
        old_path = os.path.join(folder_path, file)
        new_path = os.path.join(folder_path, new_name)

        os.rename(old_path, new_path)
        print(f"Renamed: {file} -> {new_name}")

# Set the folder path containing the pictures
folder_path = r"F:\rahul\freelance\rohan\rohan__arts\rohan_arts"  # Replace with your folder path
rename_pics(folder_path)
