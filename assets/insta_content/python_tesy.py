import os

def rename_videos(folder_path):
    # List all files in the folder
    files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]

    # Filter video files (common extensions)
    video_extensions = ('.mp4', '.mkv', '.avi', '.mov', '.wmv', '.flv', '.webm', '.m4v')
    video_files = [f for f in files if f.lower().endswith(video_extensions)]

    # Rename video files
    for index, file in enumerate(video_files, start=1):
        file_extension = os.path.splitext(file)[1]  # Get file extension
        new_name = f"video_{index}{file_extension}"  # Create new name
        old_path = os.path.join(folder_path, file)
        new_path = os.path.join(folder_path, new_name)

        os.rename(old_path, new_path)
        print(f"Renamed: {file} -> {new_name}")

# Set the folder path containing the videos
folder_path = r"F:\rahul\freelance\rohan\rohan__arts\videos"  # Replace with your folder path
rename_videos(folder_path)
